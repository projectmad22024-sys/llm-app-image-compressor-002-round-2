const startBtn = document.getElementById('startBtn');
const logDiv = document.getElementById('log');
const folderInput = document.getElementById('folderInput');
const modeSelect = document.getElementById('modeSelect');

startBtn.addEventListener('click', () => {
  log('Starting processing...');
  const files = folderInput.files;
  if (!files.length) {
    log('Please select a folder with images.');
    return;
  }
  const imageFiles = Array.from(files).filter(file =>
    file.type === 'image/png' || file.type === 'image/jpeg'
  );
  if (!imageFiles.length) {
    log('No PNG or JPG images found in the selected folder.');
    return;
  }
  processImages(imageFiles);
});

function log(message) {
  logDiv.textContent += message + '\n';
  logDiv.scrollTop = logDiv.scrollHeight;
}

async function processImages(files) {
  for (const file of files) {
    const originalSize = file.size;
    log(`Processing: ${file.name} (Original size: ${originalSize} bytes)`);
    try {
      const imageBitmap = await createImageBitmap(file);
      const canvas = document.createElement('canvas');
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imageBitmap, 0, 0);
      const mode = modeSelect.value;
      const quality = mode === 'lossless' ? 1.0 : 0.85;
      const mimeType = file.type;
      const compressedDataUrl = canvas.toDataURL(mimeType, quality);
      const compressedBlob = dataURLToBlob(compressedDataUrl);
      const compressedSize = compressedBlob.size;
      log(`Compressed: ${file.name} (Size: ${compressedSize} bytes, size reduction: ${((1 - compressedSize / originalSize) * 100).toFixed(2)}%)`);
      downloadBlob(compressedBlob, getOutputName(file.name));
    } catch (error) {
      log(`Error processing ${file.name}: ${error}`);
    }
  }
  log('Processing complete.');
}

function getOutputName(filename) {
  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex === -1) return filename + '_compressed';
  const name = filename.substring(0, dotIndex);
  const ext = filename.substring(dotIndex);
  return name + '_compressed' + ext;
}

function dataURLToBlob(dataurl) {
  const arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }
  return new Blob([u8arr], { type: mime });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
