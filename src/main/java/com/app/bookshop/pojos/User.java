package com.app.bookshop.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
public class User extends BaseEntity 
{
	@Column(name = "first_name", length = 20)
	private String firstName;
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column(length = 20, unique = true)
	private String email;
	@Column(length = 50)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	
//	@OneToOne(mappedBy = "cartOwner",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
//	//@JoinColumn(name="customer_id")
//	private ShoppingCart myCart;
//	
	public User(String firstName, String lastName, String email, String password, Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", role=" + role + "]";
	}
	
	/*
	 * public void addCart(ShoppingCart cart) { //establish bi dir relationship
	 * setMyCart(cart); cart.setCartOwner(this); }
	 */
}
