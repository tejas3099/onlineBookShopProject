package com.app.bookshop.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="books")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Books extends BaseEntity
{
	@Column(length = 50)
	private String title;
	@Column(length = 50)
	private String author;
	@Column(length = 50)
	private String category;
	@Column(length = 50)
	private String language;
	@Column(name="publishdate")
	private LocalDate publishDate;
	private double price;
	@Column(length = 1000)
	private String description;
	private int qty;
	@Column(length = 300, name = "image")
	private String imagePath;
	public Books(String title, String author, String category, String language, LocalDate publishDate, double price,
			String description, int qty) {
		super();
		this.title = title;
		this.author = author;
		this.category = category;
		this.language = language;
		this.publishDate = publishDate;
		this.price = price;
		this.description = description;
		this.qty = qty;
	}
		 

}
