"use strict()";

function ReportCtrl($state, $stateParams, $ionicScrollDelegate, DatabaseService, $interval) {
  console.log("reportCtrl");

  var report = this;

  report.data = DatabaseService.report;

  report.tag = {
    accuracy: {
      text: "How confident are you in the accuracy of the answers you submitted?"
    },
    clearInstruction: {
      text: "Was the instruction clear?"
    },
    design: {
      text : "What is your overall impression of the form’s design aesthetic?"
    },
    easeOfUse: {
      text: "Was the application form easy to use?"
    },
    experienec: {
      text: "Overall experience?"
    },
    isGoodFlow: {
      text: "Did the questions flow well?"
    },
    order: {
      text: "How is the order of the question?"
    }
  }

  console.log(report.data);
}
