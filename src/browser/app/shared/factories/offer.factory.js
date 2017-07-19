app.factory('OfferFactory', ($q, $timeout) => {

    // A bunch of fake offers that would normally be available via REST API
    const backendOffers = Array.from({length: 110}, () => {
        return {
            serviceName: "SV334",
            portOrigin: "LA/LONG BEACH, USA",
            portDestination: "NINGBO, CN",
            transitTime: 17,
            containerType: "40' HC",
            quantity: 44,
            price: Math.floor((Math.random() * 200) * 100)/100
        };
    });

    return {
        // Using $q to mock a promise coming from a $http request for offers, including paging
        getOffers: (paging) => {
            const start = (paging - 1) * 20;
            const end = (paging * 20);
            return $q((resolve, reject) => {
                $timeout(() => {
                    resolve(backendOffers.slice(start, end)); // Simulate paging
                }, 500); // simulate async
            });
        }
    };
});
