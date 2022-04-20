// ignore_for_file: prefer_const_constructors
import "package:flutter/material.dart";

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  String _text = "Not Changed";
  int _timesPressed = 1;

  void changeText() {
    _timesPressed += 1;

    if (_timesPressed >= 5) {
      setState(() {
        _text = "Changed!";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Assignment I"),
          backgroundColor: Colors.greenAccent[400],
        ),
        body: Column(
          children: [
            Center(
              child: Text(
                _text,
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
              ),
            ),
            ElevatedButton(
                style:
                    ElevatedButton.styleFrom(primary: Colors.greenAccent[400]),
                onPressed: changeText,
                child: Text("Press me 5 times"))
          ],
        ),
      ),
    );
  }
}
