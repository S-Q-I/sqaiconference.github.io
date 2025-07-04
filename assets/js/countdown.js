/**
 * SQAI 2026 Conference Countdown Timer
 * 
 * This script creates a countdown timer that displays the days, hours, and minutes
 * remaining until the SQAI 2026 conference begins.
 */

document.addEventListener('DOMContentLoaded', function() {
  // 目标日期：2026年6月26日上午9点（UTC+8台北时间）
  // 注意：JavaScript月份从0开始（0=1月，1=2月，...，5=6月）
  // 台北是UTC+8，所以我们用UTC+0的1:00 AM来代表台北的9:00 AM
  const targetDate = new Date(Date.UTC(2026, 5, 26, 1, 0, 0)); // 2026-06-26 09:00:00 台北时间
  
  // 获取计时器元素
  const daysElement = document.getElementById('countdown-days');
  const hoursElement = document.getElementById('countdown-hours');
  const minutesElement = document.getElementById('countdown-minutes');
  const secondsElement = document.getElementById('countdown-seconds');
  const countdownElement = document.getElementById('countdown-container');
  
  // 更新计时器的函数
  function updateCountdown() {
    // 获取当前时间（UTC）
    const now = new Date();
    
    // 计算剩余时间（毫秒）
    const diff = targetDate - now;
    
    // If the countdown is over, show that the conference is in progress
    if (diff <= 0) {
      countdownElement.innerHTML = '<div class="countdown-ended"><h3>SQAI 2026 is Now in Progress!</h3></div>';
      return;
    }
    
    // 计算天、小时、分钟和秒
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 更新显示
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // 为数字添加动画效果
    daysElement.classList.add('countdown-animate');
    hoursElement.classList.add('countdown-animate');
    minutesElement.classList.add('countdown-animate');
    secondsElement.classList.add('countdown-animate');
    
    // 移除动画类，以便下次更新时可以再次添加
    setTimeout(function() {
      daysElement.classList.remove('countdown-animate');
      hoursElement.classList.remove('countdown-animate');
      minutesElement.classList.remove('countdown-animate');
      secondsElement.classList.remove('countdown-animate');
    }, 500);
  }
  
  // 初次运行
  updateCountdown();
  
  // 每秒更新一次
  setInterval(updateCountdown, 1000);
});
