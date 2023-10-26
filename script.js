
function run() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    const outputFrame = document.getElementById("output");

    const combinedCode =
    `<html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script> ${jsCode} </script>
            </body>
    </html> `;

    outputFrame.srcdoc = combinedCode;
    //<iframe srcdoc="<p>Hello, World!</p>"></iframe>
}
run();
