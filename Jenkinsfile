// Template Jenkinsfile for CI of TypeScript based exercises
node {
    //slackSend message: "=== === === New build started === === ==="
    def display_name = "${JOB_NAME}-${BUILD_NUMBER}"
    display_name = display_name.replace("%2F", "-")
    slackSend color: 'good', message: "${display_name} : Build Started"
    stage('Checkout') {
        //slackSend color: 'good', message: "${display_name} : Checking out source code"
        checkout scm
    }

    // If running Jenkins in docker, wrap in nodejs block, e.g.
    /*
    nodejs('NodeJS 11.0.0') {
        sh 'npm install'
        sh 'npm test'
    }
    */
    stage('Pull dependencis') {
        sh 'npm install'
    }

    stage('Test') {
        try {
            sh 'npm test'
        } catch (err) {
            currentBuild.result='FAILURE'
        }
    }
        
    if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
        slackSend color: 'good', message: "${display_name} : Build SUCCESS"
    } else {
        slackSend color: 'danger', message: "${display_name} : Build FAILURE"
    }
    //slackSend message: "=== === === Build finished === === ==="
}