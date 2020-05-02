// TODO jenkins config
Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:8.12' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}