pipeline {
    agent any

    environment {
        BASE_URL = credentials('BASE_URL') // Fetch from Jenkins credentials
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/qunoot-ahmed/cypress-project-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Create .env File') {
            steps {
                bat """
                echo BASE_URL=${BASE_URL} > .env
                """
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}
