# Resume Instructions

## Viewing the Resume

The resume is available as an HTML file at `public/resume.html`. You can:
- Open it directly in your browser
- Print it to PDF using your browser's print function (Ctrl+P / Cmd+P)

## Converting to PDF

### Method 1: Browser Print (Recommended)
1. Open `resume.html` in your browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF" as the destination
4. Make sure margins are set to "Default" or "Minimum"
5. Save the file as `resume.pdf` in the `public` folder

### Method 2: Using Chrome Headless
```bash
chrome --headless --disable-gpu --print-to-pdf=public/resume.pdf public/resume.html
```

### Method 3: Online Tools
- Use online HTML to PDF converters
- Upload `resume.html` and download the PDF

## Design Improvements Made

The new resume design addresses common issues:

1. **Better Typography**: Professional font stack with proper sizing (11pt base)
2. **Improved Spacing**: Consistent margins and padding throughout
3. **Visual Hierarchy**: Clear section headers with accent color (#CC5500)
4. **Print Optimization**: Proper page breaks and print styles
5. **ATS-Friendly**: Clean structure that's easy for applicant tracking systems to parse
6. **Modern Layout**: Left-aligned header, organized sections, professional appearance
7. **Consistent Formatting**: Uniform date formats, spacing, and styling
8. **Better Readability**: Optimized line height and font sizes for scanning

## Customization

You can edit `public/resume.html` directly to:
- Update your information
- Add new sections
- Modify colors (search for `#CC5500` to change accent color)
- Adjust spacing and fonts

