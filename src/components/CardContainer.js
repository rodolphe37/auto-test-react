const CardContainer = ({ children, background }) => {
  const container = {
    width: "80%",
    padding: "15px",
    height: "auto",
    marginLeft: "15px",
    marginRight: "15px",
    background: background,
    color: "black",
  };

  return <div style={container}>{children}</div>;
};

export default CardContainer;
