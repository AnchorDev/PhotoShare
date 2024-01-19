import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const imageSize = width * 0.45;
const enlargedImageSize = width * 0.8;
const enlargedImageTopMarginPercentage = 10;

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
    marginBottom: 5,
    marginRight: 5,
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enlargedImage: {
    width: enlargedImageSize,
    height: enlargedImageSize,
    resizeMode: 'contain',
  },
  enlargedImageOverlay: {
    position: 'absolute',
    top: (height * enlargedImageTopMarginPercentage) / 30, // Ustawienie procentowego odstępu od góry
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Biały pasek
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: enlargedImageSize,
  },
  enlargedImageUsername: {
    color: 'black', // Zmieniono kolor tekstu na czarny
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5, // Dodałem odstęp od białego paska
  },
});
