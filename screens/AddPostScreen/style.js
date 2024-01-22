import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    paddingTop: 50,
    paddingLeft: 16,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  flexSpacer: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
    width: "100%",
  },
  image: {
    width: 400,
    height: 300,
    borderRadius: 15,
    marginBottom: 30,
  },
  input: {
    height: 150,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20, 
    borderRadius: 10, 
  },
  addIcon: {
    width: 150,
    height: 150,
    marginRight: 5,
    position: 'absolute',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
