//package com.app.bookshop.pojos;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Entity
//@Table(name="carts")
//@Getter
//@Setter
//public class ShoppingCart extends BaseEntity{
//	
//	private int totalItems;
//	private double totalCartPrice;
//	
//	// Cart HAS-A Customer : uni dir asso between Cart 1----->1 Customer (owning side) : so LAZY should work ! I confirmed : using debugger : show User proxy
//	@OneToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "customer_id") // FK constraint
//	private User cartOwner;
//
//	// Cart HAS-A CartItems : bi dir asso between Cart 1---->* CartItem
//	@OneToMany(mappedBy = "myCart", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
//	private List<CartItem> cartItems = new ArrayList<>();
//}
