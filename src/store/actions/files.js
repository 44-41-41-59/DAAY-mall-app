import firebase from 'firebase/app';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAhTQzZp5xQEIyGeHZ8mZG1ThEZq5M9rU4',
  authDomain: 'daay-mall-f24b3.firebaseapp.com',
  databaseURL: 'https://daay-mall-f24b3.firebaseio.com',
  projectId: 'daay-mall-f24b3',
  storageBucket: 'daay-mall-f24b3.appspot.com',
  messagingSenderId: '33722851505',
  appId: '1:33722851505:web:c3fa8b5351d569e2dd8290',
  measurementId: 'G-7J6DYEVDPT',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export const uploadImages = (images) => ({
  type: 'ADD IMAGES',
  payload: { images },
});

export const setProgress = (progress) => ({
  type: 'PROGRESS',
  payload: { progress },
});

export const handleUpload = function (spaceName, files) {
  return async (dispatch) => {
    let images = [];
    for (let i = 0; i < files.length; i++) {
      const uploadTask = storage
        .ref(`${spaceName}/${files[i].name}`)
        .put(files[i]);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
          dispatch(setProgress(progress));
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref(spaceName)
            .child(files[i].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url, 'jfdskjfkldskjl');
              images.push(url);
              dispatch(uploadImages(images));
              dispatch(setProgress(0));
            });
        }
      );
    }
  };
};
