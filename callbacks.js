//callback
const asyncCallback = (input, callback) => {
    setTimeout(() => {
      data = 'someDataCallback';
      callback(data);
    }, 1000);
  };
  asyncCallback('some input', data => {
    console.log(data);
  });
  
  //promise
  const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      data = 'someDataPromise';
      resolve(data)
    }, 2000);
  });
  asyncPromise.then(data => console.log(data));
  
  //async-await
  const asyncAA = async (input) => {
    await setTimeout(() => {
      console.log('someDataAsyncAwait')
    }, 3000);
  };
  asyncAA('some input');
  