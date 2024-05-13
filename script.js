document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const totalStudentsSpan = document.getElementById("totalStudents");
    const presentStudentsSpan = document.getElementById("presentStudents");
    const absentStudentsSpan = document.getElementById("absentStudents");
  
    let totalStudents = boxes.length;
    let presentCount = 0;
    let absentCount = totalStudents;
    let lateCount = 0;
  
    boxes.forEach(box => {
      box.addEventListener("click", function() {
        if (this.classList.contains("present")) {
          this.classList.remove("present");
          this.classList.add("late");
          presentCount--;
          lateCount++;
        } else if (this.classList.contains("late")) {
          this.classList.remove("late");
          absentCount++;
          lateCount--;
        } else {
          this.classList.add("present");
          absentCount--;
          presentCount++;
        }
        updateProgress();
      });
    });
  
    function updateProgress() {
      const percentage = Math.round((presentCount / totalStudents) * 100);
      const progressCircle = document.querySelector(".circle-progress");
      const percentageText = document.querySelector(".percentage");
      const circumference = Math.PI * 80;
      const progressOffset = circumference - (percentage / 100) * circumference;
      progressCircle.style.strokeDashoffset = progressOffset;
      percentageText.textContent = percentage + "%";
  
      totalStudentsSpan.textContent = totalStudents;
      presentStudentsSpan.textContent = presentCount;
      absentStudentsSpan.textContent = absentCount;
    }
  });
  