const width_height = "width='1.5rem' height='1.5rem'";
 
const svgIcons = {
    'js': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"></path></svg>',

    'html5': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z"></path></svg>',
    
    'css3': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M64,32,99,435.22,255.77,480,413,435.15,448,32ZM354.68,366.9,256.07,395l-98.46-28.24L150.86,289h48.26l3.43,39.56,53.59,15.16.13.28h0l53.47-14.85L315.38,265H203l-4-50H319.65L324,164H140l-4-49H376.58Z"></path></svg>',
    
    'php': '<svg width="2.8rem" height="2.8rem" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <g>  <path stroke="null" id="svg_3" d="m81.7,106.7l-12.5,0l-5.1,31l11.6,0c0,0 14.1,0.4 14.8,-20.1c0.7,-11.8 -8.8,-10.9 -8.8,-10.9zm106,0l-12.4,0l-5.1,31l11.6,0c0,0 14.1,0.4 14.8,-20.1c0.7,-11.8 -8.9,-10.9 -8.9,-10.9zm-59.7,-52.1c-65.2,0 -118,32.9 -118,73.4c0,40.5 52.8,73.4 118,73.4c65.2,0 118,-32.8 118,-73.4c0,-40.5 -52.8,-73.4 -118,-73.4zm-52.8,94.6l-12.6,-0.1l-3.5,19.5l-13.5,0l12.1,-73.4c0,0 17.2,0.3 28.6,0c11.3,-0.3 22.4,9.2 17.2,30.6c-6.2,25.5 -28.3,23.4 -28.3,23.4zm60.5,0c0,0 3.2,-17.1 4.6,-28.9c0.6,-4.9 3.1,-13.1 -3.6,-13.1c-5.6,0 -14.1,-0.1 -14.1,-0.1l-7.1,42.1l-13.3,0l12.4,-73.7l13.6,0l-3.4,19.7l14.1,0c0,0 18.6,-1.7 16.4,16.4c-2.2,18.2 -6.4,37.5 -6.4,37.5l-13.2,0l0,0.1zm73.9,-23.4c-6.2,25.5 -28.3,23.4 -28.3,23.4l-12.6,-0.1l-3.5,19.5l-13.5,0l12.1,-73.4c0,0 17.2,0.3 28.6,0c11.3,-0.2 22.4,9.2 17.2,30.6z" fill="currentColor"/> </g></svg>',
    
    'sass': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M511.78,328.07v0c-1.47-11.92-7.51-22.26-18-30.77a3.58,3.58,0,0,0-.43-.44l0,0-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5,0,0a3.5,3.5,0,0,0-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09C383.28,271.36,382.07,257,389.2,235c1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54,2.86-6.2,5.83-4.7,22-18.36,42.1-31.57,61.5l-.78,1.14c-8.14-17.26-6.45-30.63-.78-47.38,1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62,1.93-13.72,19.82-21.65,41.24-2,5.39-3.72,10-4.75,12.15-2.45,5-4.79,10.7-7.27,16.75-5.6,13.69-11.91,29.1-20.93,38.78-3.28-7.25,1.88-18.68,6.89-29.77,5.93-13.11,11.53-25.5,5.08-33.41a11.82,11.82,0,0,0-8.33-4.32,13.26,13.26,0,0,0-6.15,1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48,14.88-45.75,26.8-6.84,8-22,14.1-35.31,19.45C129.37,305,124.37,307,120.2,309c-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11,42-65.14,79.88-84.43,28.71-14.6,53.67-24.28,76.31-29.57,31.8-7.43,58.66-5.93,79.82,4.44,11.58,5.67,17,18,13.56,30.68-9,32.95-46.29,55.53-78.18,65.69-19.21,6.12-35.56,8.68-50,7.84-18.1-1.05-32.88-10.13-39.2-14a21.18,21.18,0,0,0-3.2-1.8l-.29-.07a3.21,3.21,0,0,0-3.19,1c-1.3,1.55-.84,4-.37,5.24,6.15,16.07,18.85,26.22,37.74,30.17a92.09,92.09,0,0,0,18.78,1.79c44.21,0,100.62-25.49,121.34-46.48,14.13-14.3,24.42-29,28.68-54.35,4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5,12.21-82.4,34.41-114.94,60.93-40.12,32.67-54.62,63-43.12,90.25,11.81,27.93,40.61,45.4,68.46,62.3,9,5.45,17.56,10.64,25.27,16-2.32,1.13-4.69,2.28-7.1,3.43C67.06,335,40.54,347.75,25.83,368.82c-10.68,15.35-12.68,30.63-5.94,45.42,3.6,7.87,10,13.21,18.89,15.87A50,50,0,0,0,53,432c17.31,0,36.36-7,46.73-13.47,18.32-11.5,30.19-26.94,35.29-45.89,4.54-16.86,3.45-33.61-3.15-48.56l22.45-11.32c-10.83,36-2.53,57.5,6.59,69.36,3.36,4.37,9.42,7,16.19,7.12s13-2.43,16.52-6.77c6.66-8.25,11.58-17.9,16.11-27.55-.24,6.3.06,12.68,2.21,18.09,1.93,4.87,5.11,8.1,9.21,9.34,4.36,1.33,9.47.21,14.39-3.15,22.17-15.17,37.33-51.58,49.51-80.85,1.73-4.16,3.39-8.16,5-11.9a152.5,152.5,0,0,0,12.5,31.07c1.18,2.14,1.08,3.08-.52,4.84-2.41,2.64-5.77,5.83-9.33,9.21-10.78,10.23-24.2,23-26,34.23-.7,4.5,2.4,8.6,7.21,9.53,14.47,2.88,31.9-1.33,46.64-11.25,13.4-9,18.44-21.55,15-37.19-3.33-15.06,4.27-33.76,22.59-55.62,3,12.53,7,22.66,12.52,31.53l-.15.12c-13.34,11.65-31.62,27.6-28.78,46.95a13.35,13.35,0,0,0,5.58,9.22,14.22,14.22,0,0,0,11.2,2.06c17.47-3.67,30.62-11.06,40.18-22.57s6.07-24.27,2.85-34.17c25-6.78,47.26-6.61,68.1.5,11.7,4,20.09,10.57,24.93,19.64,6.09,11.41,2.8,21.94-9.29,29.65-3.71,2.37-5.5,3.82-5.61,5.65a2.65,2.65,0,0,0,1,2.23c1.4,1.15,5.72,3.15,15.49-3,9-5.65,14.28-13.34,15.63-23A39,39,0,0,0,511.78,328.07ZM112.05,353.13l-.1,1.28c-1.56,14.64-9,27.4-22.15,38-8.26,6.66-17.23,10.75-25.25,11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48,38.32-50.8,60.81-59.13A51.39,51.39,0,0,1,112.05,353.13ZM214.4,281.27h0c-3.7,21.09-14.49,60.9-31.45,76.35-.81.74-1.49,1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28,5-52.69,6.59-13.42,16-22.31,26.52-25a5.29,5.29,0,0,1,1.34-.19,1.58,1.58,0,0,1,1,.27A1.64,1.64,0,0,1,214.4,281.27Zm83.49,76.88c-3.19,3.33-7.56,2.88-6.53,1.66l16.24-17.24C306.29,348.5,302.42,353.41,297.89,358.15Zm67.37-14.91a14.07,14.07,0,0,1-4.93,1.39c-.46-9.07,8.33-19.28,17-26.09C379.66,328,374.89,338,365.26,343.24Z"></path></svg>',
    
    'bootstrap': '<svg class="bi bi-bootstrap" '+ width_height +' viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"></path></svg>',

    'node_js': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M429.76,130.07,274.33,36.85a37,37,0,0,0-36.65,0L82.24,130.06A38.2,38.2,0,0,0,64,162.83V349a38.26,38.26,0,0,0,18.24,32.8L123,406.14l.23.13c20.58,10.53,28.46,10.53,37.59,10.53,32.14,0,52.11-20.8,52.11-54.29V182a8.51,8.51,0,0,0-8.42-8.58H182.13a8.51,8.51,0,0,0-8.42,8.58V362.51a15,15,0,0,1-6.85,13.07c-5.9,3.6-14.47,2.84-24.14-2.15l-39.06-23.51a1.1,1.1,0,0,1-.48-.92V165.46a1.32,1.32,0,0,1,.59-1.06l151.84-93a.82.82,0,0,1,.73,0l151.93,93a1.34,1.34,0,0,1,.55,1.1V349a1.28,1.28,0,0,1-.45,1L256.31,440.65a1.22,1.22,0,0,1-.8,0l-38.83-23.06a7.8,7.8,0,0,0-7.83-.41l-.34.2c-10.72,6.35-13.6,8-23.54,11.62-1.62.59-5.43,2-5.76,5.77s3.29,6.45,6.51,8.32l51.9,31.87a35.67,35.67,0,0,0,18.3,5.07l.58,0h0a35.87,35.87,0,0,0,17.83-5.07l155.43-93.13A38.37,38.37,0,0,0,448,349V162.83A38.21,38.21,0,0,0,429.76,130.07Z"></path><path d="M307.88,318.05c-37.29,0-45.24-10.42-47.6-27.24a8.43,8.43,0,0,0-8.22-7.32h-19.8a8.44,8.44,0,0,0-8.26,8.58c0,14.58,5.12,62.17,83.92,62.17h0c24.38,0,44.66-5.7,58.63-16.49S388,311.26,388,292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89,0-5.47,0-18.28,35.46-18.28,25.23,0,38.74,3.19,43.06,20a8.35,8.35,0,0,0,8.06,6.67h19.87a8.24,8.24,0,0,0,6.16-2.86,8.91,8.91,0,0,0,2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06,0-73.55,20.75-73.55,55.5,0,38.1,28.49,48.87,71.29,53.33,50,5.17,50,12.71,50,19.37C349.46,304.2,345.15,318.05,307.88,318.05Z"></path></svg>',

    'gitHub': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path></svg>',

    'npm': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><rect x="227.6" y="213.1" width="28.4" height="57.1" style="fill:currentColor"></rect><path d="M0,156V327.4H142.2V356H256V327.4H512V156ZM142.2,298.9H113.8V213.2H85.3v85.7H28.4V184.6H142.2Zm142.2,0H227.5v28.6H170.6V184.6H284.4V298.9Zm199.2,0H455.2V213.2H426.8v85.7H398.4V213.2H370v85.7H313.1V184.6H483.8V298.9Z" style="fill:currentColor"></path></svg>',

    'vue_js': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><polygon points="256 144.03 200.51 47.92 121.08 47.92 256 281.61 390.92 47.92 311.49 47.92 256 144.03"></polygon><polygon points="409.4 47.92 256 313.61 102.6 47.92 15.74 47.92 256 464.08 496.26 47.92 409.4 47.92"></polygon></svg>',

    'laravel': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M505.57,234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78,39.78,0,0,0-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06,1.5-28.14,4.48-14,2.29-35.11,5.77-38.31,6.07l-.71.06-.69.13c-10,1.78-16.62,6.22-19.56,13.19-1.55,3.68-3.22,11.15,2.94,19.86,1.53,2.22,6.83,9.56,15.94,22.17,6.06,8.4,12.87,17.82,18.75,26L259.9,275,150.66,96.05l-.2-.34-.23-.33-.44-.65C145.32,88.17,139.76,80,123.7,80h0c-1.13,0-2.31,0-3.63.11-4.6.25-21.42,1.57-40.89,3.11-21.49,1.69-50.9,4-54.72,4.1h-.73l-.79.08c-9.14.89-15.77,4.6-19.7,11-6.55,10.69-1.42,22.69.26,26.63C6.87,133,37.56,197.7,64.63,254.81c18,37.94,36.58,77.17,38.1,80.65a34.85,34.85,0,0,0,32.94,21.59,46.62,46.62,0,0,0,9.86-1.1l.21,0,.2-.05c13.86-3.38,57.83-14.54,89.2-22.59,1.9,3.32,3.9,6.83,6,10.44,21.93,38.5,37.9,66.35,43.16,73.46C287,421,295,432,310.06,432c5.46,0,10.46-1.4,15.74-2.89l1.53-.43.06,0h.06c10.53-3,150.69-52.16,157.87-55.35l.22-.1c5.44-2.41,13.66-6.05,16.18-15.4,1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54,17.37-4.5,38.8-10.11,43.38-11.55,11.47-3.43,14.94-10.69,16-14.73C512.26,250.32,513.29,242.27,505.57,234.62Zm-320,58.19c-17.81,4.17-30.22,7.08-37.89,8.9-6.67-13.34-19.74-39.65-32.5-65.33C85.44,176.46,70.08,145.61,62,129.48l8.15-.7c13.34-1.15,31.61-2.72,41.78-3.57,16.76,28.26,74.32,125.3,96.3,162.3ZM427.58,172h0ZM310.06,416.4h0Zm53.67-56.95c-24.21,8-37.33,12.37-44.42,14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5,6.81,14.57,19.72,33.46,44.93C417.93,341.49,387.8,351.47,363.73,359.45ZM419.6,237.82l-23.76-31.53c13.67-2.39,21.54-3.77,26.15-4.6l12,14.88,11.94,14.82C437.73,233.38,428.19,235.71,419.6,237.82Z"></path></svg>',

    'wordpress': '<svg xmlns="http://www.w3.org/2000/svg" '+ width_height +' fill="currentColor" viewBox="0 0 512 512"><path d="M259,271.3,226.2,367h-.1l-25.4,73.1c1.8.5,3.5.9,5.3,1.4h.3a192.51,192.51,0,0,0,49.5,6.5,157,157,0,0,0,24.9-1.8,184.3,184.3,0,0,0,32.5-7.1h0c2.6-.8,5.2-1.7,7.8-2.6-2.8-6-8.8-19.3-9.1-19.9Z"></path><path d="M80.8,180.5C70.8,203.1,64,230.9,64,256c0,6.3.3,12.6.9,18.8,6.9,71.2,52.9,131,116.1,157.9,2.6,1.1,5.3,2.2,8,3.2L96,180.6C88,180.3,86.5,180.8,80.8,180.5Z"></path><path d="M430.2,175.4a188,188,0,0,0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193,193,0,0,0,325.1,77a189.2,189.2,0,0,0-69.2-13,191.51,191.51,0,0,0-149.4,71.7A196,196,0,0,0,89,161.3c14.2.1,31.8.1,33.8.1,18.1,0,46-2.2,46-2.2,9.4-.6,10.4,13.1,1.1,14.2,0,0-9.4,1.1-19.8,1.6L213,362l37.8-113.3L224,175.1c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8,1-14.2,0,0,28.5,2.2,45.5,2.2,18.1,0,46-2.2,46-2.2,9.3-.6,10.5,13.1,1.1,14.2,0,0-9.3,1.1-19.7,1.6l62.3,185.6,17.3-57.6c8.7-22.4,13.1-40.9,13.1-55.7,0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4,0-15.9,12-30.7,29-30.7h2.2c26.2-.7,34.8,25.3,35.9,43v.6c.4,7.2.1,12.5.1,18.8,0,17.4-3.3,37.1-13.1,61.8l-39,112.8-22.3,65.7c1.8-.8,3.5-1.6,5.3-2.5,56.7-27.4,98-82,106.7-146.7a172.07,172.07,0,0,0,1.9-26A191.11,191.11,0,0,0,430.2,175.4Z"></path><path d="M256,48a208.06,208.06,0,0,1,81,399.66A208.06,208.06,0,0,1,175,64.34,206.7,206.7,0,0,1,256,48m0-16C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32Z"></path></svg>',

    'inertia': '<svg '+ width_height +' viewBox="0 0 512 512"  fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M184 165H95L181 251L95 337H184L270 251L184 165Z" /><path d="M318.5 165H229.5L315.5 251L229.5 337H318.5L404.5 251L318.5 165Z"/>',

    'csharp': '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" '+ width_height +' fill="currentColor" viewBox="0 0 50 50"><path d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z"></path></svg>',

    'python': '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" '+ width_height +' fill="currentColor" viewBox="0 0 50 50"><path d="M 24.5 2 C 15.800781 2 14 6.492188 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 5.792969 15 2 17.601563 2 25 C 2 32.398438 5.792969 35 9.09375 35 L 15 35 L 15 29 C 15 26.800781 16.800781 25 19 25 L 31 25 C 32.699219 25 34 23.699219 34 22 L 34 9.09375 C 34 5.59375 30.699219 2 24.5 2 Z M 20 7 C 21.101563 7 22 7.898438 22 9 C 22 10.101563 21.101563 11 20 11 C 18.898438 11 18 10.101563 18 9 C 18 7.898438 18.898438 7 20 7 Z M 35 15 L 35 22 C 35 24.199219 33.199219 26 31 26 L 19 26 C 17.300781 26 16 27.300781 16 29 L 16 40.90625 C 16 44.40625 19.300781 48 25.5 48 C 34.199219 48 36 43.507813 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 44.207031 35 48 32.398438 48 25 C 48 17.601563 44.207031 15 40.90625 15 Z M 30 39 C 31.101563 39 32 39.898438 32 41 C 32 42.101563 31.101563 43 30 43 C 28.898438 43 28 42.101563 28 41 C 28 39.898438 28.898438 39 30 39 Z"></path></svg>',

    'git': '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" '+ width_height +' fill="currentColor" viewBox="0 0 50 50"><path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path></svg>',

    'github': '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" '+ width_height +' fill="currentColor" viewBox="0 0 50 50"><path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path></svg>',

 

// svgIcons = js, html5, css3, sass, bootstrap, node_js, gitHub, npm, vue_js, laravel, wordpress, c#, python, git, github

}
export default svgIcons;