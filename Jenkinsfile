node {
    //currentBuild.displayName="${JOB_NAME}-${BUILD_NUMBER}"
    def display_name = "${JOB_NAME}-${BUILD_NUMBER}"
    sh "echo initial display name: ${display_name}"
    display_name = display_name.replace("%2F", "-")
    sh "echo display name after replace: ${display_name}"
    slackSend color: 'good', message: "${display_name} : Build Started"
    stage('Checkout') {
        slackSend color: 'good', message: "${display_name} : Checking out source code"
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
            try {
                sh 'npm test'
            } catch (err) {
                currentBuild.result='FAILURE'
            }
        }
        
    // } 
    if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
        slackSend color: 'good', message: "${display_name} : Build SUCCESS"
    } else {
        slackSend color: 'danger', message: "${display_name} : Build FAILURE"
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
