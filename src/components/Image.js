import styled from "styled-components";

import { Box } from "./Box";
import themed from "./helpers";

export const Image = styled(Box)(
  {
    maxWidth: "100%"
  },
  themed("Image")
);

Image.propTypes = {};

Image.defaultProps = {
  as: "img",
  m: 0
};
