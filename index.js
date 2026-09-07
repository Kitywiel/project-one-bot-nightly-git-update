// Bot Server - This code will be pulled from git and auto-updated
console.log('🤖 Bot Server Started!');
console.log(`Started at: ${new Date().toISOString()}`);

let counter = 0;

// Main heartbeat loop
const interval = setInterval(() => {
  counter++;
  console.log(`[Bot Running] Counter: ${counter} - ${new Date().toISOString()}`);
}, 3000);

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('⏹️ SIGTERM received, shutting down gracefully...');
  clearInterval(interval);
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('⏹️ SIGINT received, shutting down gracefully...');
  clearInterval(interval);
  process.exit(0);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err.message);
  console.error(err.stack);
  process.exit(1);
});

console.log('✅ Bot is now running and waiting for tasks...');