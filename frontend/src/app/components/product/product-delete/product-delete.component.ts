import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "./../product.module";
import { ProductService } from "./../product.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = "1";
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct() {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
    });
  }

  cancel() {
    this.router.navigate(["/products"]);
  }
}
