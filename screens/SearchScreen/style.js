import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  lupaIconContainer: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
  },
  lupaIcon: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    flex: 1,
    color: 'white',
    paddingLeft: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 450,
    height: 210,
    resizeMode: 'contain',
  },
  imageName: {
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});
