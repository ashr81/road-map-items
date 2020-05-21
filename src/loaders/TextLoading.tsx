import React from "react"
import ContentLoader from "react-content-loader" 
import { TextLoadingType } from "../types"

const TextLoading = ({
  width, height, style
}: TextLoadingType) => (
  <ContentLoader 
    speed={2}
    width={width}
    height={height}
    style={style}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
  </ContentLoader>
)

TextLoading.defaultProps = {
  width: 100,
  height: 40,
  style: {}
}

export default TextLoading