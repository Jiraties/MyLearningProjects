import 'package:flutter/material.dart';
import "../widgets/product_item.dart";
import "package:provider/provider.dart";
import '../providers/products.dart';

class ProductsGrid extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
  final productsData = Provider.of<Products>(context);
  final products = productsData.items;
    return Scaffold(
      appBar: AppBar(
        title: const Text("MyShop"),
      ),
      body: GridView.builder(
          padding: const EdgeInsets.all(10),
          itemCount: products.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 3 / 2,
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
          ),
          itemBuilder: (ctx, index) => ProductItem(products[index].id,
              products[index].title, products[index].imageUrl)),
    );
  }
}