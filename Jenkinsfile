node {
    slackSend color: 'good', message: 'Build Started'
    stage('Checkout') {
        slackSend color: 'good', message: 'Checking out source code'
        checkout scm
    }

    // Now running locally - npm should be available
    // nodejs('NodeJS 11.0.0') {
        stage('Pull dependencis') {
            sh 'npm install'
        }

        // stash code & dependencies to expedite subsequent testing
        // and ensure same code & dependencies are used throughout the pipeline
        // stash is a temporary archive
        // stash name: 'everything', 
        //       excludes: 'test-results/**', 
        //       includes: '**'
    
        stage('Test') {
            sh 'npm test'
        }
        
    // } 
    if (currentBuild.result == 'SUCCESS') {
        slackSend color: 'good', message: 'Build successful: ${JOB_NAME}-${BUILD_NUMBER}'
    } 
    if (currentBuild.result == 'FAILURE') {
        slackSend color: 'danger', message: 'Build failure: ${JOB_NAME}-${BUILD_NUMBER}'
    }
}


//input 'Deploy to staging?'
//
//// limit concurrency so we don't perform simultaneous deploys
//// and if multiple pipelines are executing, 
//// newest is only that will be allowed through, rest will be canceled
//stage name: 'Deploy to staging', concurrency: 1
//node {
//    // write build number to index page so we can see this update
//    // on windows use: bat "echo '<h1>${env.BUILD_DISPLAY_NAME}</h1>' >> app/index.html"
//    sh "echo '<h1>${env.BUILD_DISPLAY_NAME}</h1>' >> app/index.html"
    //
//    // deploy to a docker container mapped to port 3000
//    // on windows use: bat 'docker-compose up -d --build'
//    sh 'docker-compose up -d --build'
    //
//    notify 'Solitaire Deployed!'
//}


//def notify(status){
//    emailext (
//      to: "wesmdemos@gmail.com",
//      subject: "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
//      body: """<p>${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        //<p>Check console output at <a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a></p>""",
//    )
//}
