import "package:flutter/material.dart";

// void main() {
//   runApp(MyApp());
// }

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var questions = [
      "What's your favourite color?",
      "What's your favourite animal?",
    ];
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Quiz App"),
        ),
        body: Column(
          children: const [
            Text("The question!"),
            RaisedButton(
                child: Text("Answer 1"),
                onPressed: null,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                )),
            RaisedButton(
              child: Text("Answer 2"),
              onPressed: null,
            ),
            RaisedButton(
              child: Text("Answer 3"),
              onPressed: null,
            ),
          ],
        ),
      ),
    );
  }
}
