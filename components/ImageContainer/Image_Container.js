import React from "react";
import Image from 'next/image'

const ImageContainer = ({ containerImage, width, height }) => {
  return (
    <div
      className="box"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Image
        src={containerImage}
        width={width}
        height={height}
        style={{ marginTop: 10 }}
        alt="image"
      />
    </div>
  );
};

export default ImageContainer;




// import React from "react";
// import Image from 'next/image';

// const ImageContainer = ({ containerImage, width, height }) => {
//   return (
//     <div
//       className="box"
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         display: "flex",
//       }}
//     >
//       <Image
//         src={containerImage}
//         style={{marginTop: 10}}
//         alt="image"
//         width={300}
//         height={200}
//         // style={{ width: width, height: height }}

//       />
//     </div>
//   );
// };

// export default ImageContainer;

