export default function adjustedSyntaxStyles(style) {
    
  // Adjust coloring and font
  style[":not(pre) > code[class*=\"language-\"]"].background = "rgba(var(--colorButtonBgRGB),0.7)"
  style["pre[class*=\"language-\"]"].margin = "0"
  style["pre[class*=\"language-\"]"].background = style[":not(pre) > code[class*=\"language-\"]"].background
  style["pre[class*=\"language-\"]"].fontSize = "0.95rem"
  style["pre[class*=\"language-\"]"].padding = "calc(var(--unit)*4)"
  
  if (!style["pre[class*=\"language-\"]"].fontFamily.includes("IBM Plex Mono")) {
    style["pre[class*=\"language-\"]"].fontFamily = "IBM Plex Mono, " + style["pre[class*=\"language-\"]"].fontFamily
  }

  return style;
}