//Catch and handle errors more cleanly

const catchAsyncErrors = (theFunction) => {
    return (req, res, next) => {
      Promise.resolve(theFunction(req, res, next)).catch(next);
    };
  };
  
  module.exports = catchAsyncErrors;