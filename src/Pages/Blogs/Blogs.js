import React from 'react';
import Header from '../../Shared/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <h1>What is the difference between authentication and authorization?</h1>
                <p> authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            </div>
            <div>
                <h1>What other services does firebase provide other than authentication?</h1>
                <p>There are many services which Firebase provides, Most useful of them are:
                    Cloud Firestore.
                    Cloud Functions.
                    Authentication.
                    Hosting.
                    Cloud Storage.
                    Google Analytics.
                    Predictions.
                    Cloud Messaging.</p>
            </div>

        </div>
    );
};

export default Blogs;