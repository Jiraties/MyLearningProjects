import 'package:flutter/material.dart';
import "package:provider/provider.dart";

import 'package:flutter_project/screens/product_detail_screen.dart';
import 'package:flutter_project/screens/products_overview_screen.dart';
import "./providers/products.dart";

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => Products(),
      child: MaterialApp(
        title: 'MyShop',
        theme: ThemeData(
          primarySwatch: Colors.purple,
          accentColor: Colors.deepOrange,
          fontFamily: "Lato",
        ),
        routes: {
          ProductDetailScreen.routeName: (context) => ProductDetailScreen(),
        },
        home: ProductsOverviewScreen(),
      ),
    );
  }
}
