// ignore_for_file: prefer_const_constructors

import 'package:expense_tracker/widgets/user_transactions.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter App',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Expenses Tracker'),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              width: double.infinity,
              child: const Card(
                color: Colors.blue,
                elevation: 5,
                child: Text("CHART!"),
              ),
            ),
            UserTransactions(),
          ],
        ),
      ),
    );
  }
}
