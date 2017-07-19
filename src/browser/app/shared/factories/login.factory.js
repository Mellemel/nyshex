app.factory('LoginFactory', ($q, $timeout) => {
    // Here are the credentials for a valid user
    const validUserName = "candidate@nyshex.com";
    const validPassword = "Password1234!";
    return {
        login: (loginCredentials) => {
            // Using $q to mock a promise coming from a $http request for logging in a user
            return $q((resolve, reject) => {
                $timeout(() => {
                    if (loginCredentials.userName === validUserName
                        && loginCredentials.password === validPassword) {
                        resolve(true);
                    } else {
                        reject({status: 401, message: 'Unknown user or incorrect password.'});
                    }
                }, 500); // Simulate async
            });
        }
    };
});
