//package com.app.bookshop.pojos;
//
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Entity
//@Table(name="cart_items")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class CartItem extends BaseEntity
//{
//	private int quantity;
//	private double totalPrice;
//	@ManyToOne
//	@JoinColumn(name = "cart_id")
//	private ShoppingCart myCart;
//	@OneToOne
//	@JoinColumn(name = "product_id")
//	private Books books;
//}
