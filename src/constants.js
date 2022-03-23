export const COLORS = {
  bgColor: '#f8f8f8',
  black: '#04102e',
  red: '#e11e3c',
  orange: '#ff4901',
  borderColor: '#f4f4f4',
  grayDark: '#cfd0d8',
  gray: '#cacaca',
  grayLight: '#efefef',
  purple: '#8376ff',
  purpleLight: '#eceaf9',
}

export const SIZE = {
  borderRadius: 12
}

// Global CSS Classes
export const CLASSES = {
  input: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: SIZE.borderRadius,
    minWidth: 300
  },
  layout: {
    padding: 15,
    backgroundColor: COLORS.bgColor,
    flex: 1
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.black,
    // marginBottom: 10,
    // marginTop: 15,
  }
}