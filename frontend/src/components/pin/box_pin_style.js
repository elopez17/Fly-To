export const pinStyle = {
  position: 'relative',
  width: 40,
  height: 40,
  left: -40 / 2,
  top: -40 / 2,
  backgroundColor: 'rgb(95, 188, 205)',
  textAlign: 'center',
  color: 'rgb(52,32,50)',
  fontWeight: 'bold',
  padding: 5,
  fontSize: '80%',
  WebkitClipPath: "polygon(50% 0%, 100% 0, 100% 40%, 100% 70%, 60% 80%, 50% 100%, 40% 80%, 0% 70%, 0 40%, 0 0)",
  borderRadius: '3px',
  marginTop: -40
};

export const pinStyleContent = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  top: 0,
  textAlign: 'center',
  color: 'rgb(52,32,50)',
  fontWeight: 'bold',
  padding: 4,
  borderRadius: '50% 50% 50% 50%',
};

export const pinStyleContentHover = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  top: 0,
  textAlign: 'center',
  color: 'rgb(52,32,50)',
  fontWeight: 'bold',
  padding: 4,
  borderRadius: '50% 50% 50% 50%',
  backgroundColor: 'rgb(95, 188, 205)',
  zIndex: "5000",
};
