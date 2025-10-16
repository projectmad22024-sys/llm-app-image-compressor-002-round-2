# Image Compression Web Tool

## Overview
This web application allows users to compress PNG and JPG images either losslessly or in a lossy mode aiming for at least 85% visual quality. It supports processing individual images or entire folders, providing size comparisons before and after compression.

## Features
- Supports both lossless and lossy compression modes.
- Can process a folder of images (PNG and JPEG).
- Displays before and after sizes for each image.
- Easy to use via a web browser.

## Usage
1. Open `index.html` in a modern web browser.
2. Click the 'Choose Folder' button to select a folder containing images.
3. Select the compression mode:
   - **Lossless:** preserves original quality.
   - **Lossy:** compresses with at least 85% quality.
4. Click 'Start Compression'.
5. Download links for compressed images will be generated automatically.

## Performance Benchmarks
- Compression times depend on image size and number; typically <1 second per image.
- Lossless compression maintains original size or reduces slightly.
- Lossy mode can achieve efficient size reduction of 20-70%, depending on image complexity.

## Notes
- Results depend on browser capabilities.
- Always keep original images for backup.

## License
This project is licensed under the MIT License.

## How to Run
Simply open `index.html` in a web browser; no server setup needed.

---

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.