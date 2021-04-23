export default function adjustedSyntaxStyles(style) {
    
  // Adjust coloring and font  
    style[":not(pre) > code[class*=\"language-\"]"].background = "rgba(var(--colorButtonBgRGB),0.7)"
    style["pre[class*=\"language-\"]"].margin = "0"
    style["pre[class*=\"language-\"]"].background = style[":not(pre) > code[class*=\"language-\"]"].background
    style["pre[class*=\"language-\"]"].fontFamily = "IBM Plex Mono, " + style["pre[class*=\"language-\"]"].fontFamily
    style["pre[class*=\"language-\"]"].fontSize = "0.75rem"
    style["pre[class*=\"language-\"]"].padding = "calc(var(--unit)*4)"

    return style;
}