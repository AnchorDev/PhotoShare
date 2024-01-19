import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    paddingTop: 50,
    paddingLeft: 16,
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
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
    bottom: 60,
    right: 50,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden', 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  addIcon: {
    width: 100,
    height: 100,
    marginRight: 5,
    position: 'absolute',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
