function Box({ className = '', size, style, ...rest }) {
  const sizeClassName = size ? `box--${size}` : '';

  return (
    <div
      className={`box ${sizeClassName} ${className}`}
      style={{ fontStyle: 'italic', ...style }}
      {...rest}
    ></div>
  );
}

const smallBoxStyles = {
  backgroundColor: 'lightblue',
};

const element = (
  <div>
    <Box size="small" style={smallBoxStyles}>
      Small box
    </Box>
    <Box size="medium" style={{ backgroundColor: 'pink' }}>
      Medium box
    </Box>
    <Box size="large" style={{ backgroundColor: 'orange' }}>
      Large box
    </Box>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));

/* 
  <style>
    .box {
      border: 1px solid #333;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .box--small {
      width: 90px;
      height: 90px;
    }
    .box--medium {
      width: 180px;
      height: 180px;
    }
    .box--large {
      width: 270px;
      height: 270px;
    }
  </style>
*/
