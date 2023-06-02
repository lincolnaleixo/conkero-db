module.exports = {
  apps: [
    {
      name: 'db-api',
      script: './index.js',
      instances: 'max', // to use maximum available CPUs
      autorestart: true, // to restart app if it crashes
      watch: false, // to watch for file changes and restart if any change
      max_memory_restart: '1G', // if the app reaches 1GB memory it will restart
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
