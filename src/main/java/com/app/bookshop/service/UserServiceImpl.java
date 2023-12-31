package com.app.bookshop.service;



import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.bookshop.custom_exceptions.ResourceNotFoundException;
import com.app.bookshop.dao.UserDao;
import com.app.bookshop.dto.AuthRequest;
import com.app.bookshop.dto.AuthResponse;
import com.app.bookshop.dto.SignUpRequest;
import com.app.bookshop.dto.SignUpResponse;
import com.app.bookshop.pojos.Role;
import com.app.bookshop.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService 
{
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public SignUpResponse addUser(SignUpRequest user) {
		System.out.println("emp " + user);
		user.setRole(Role.CUSTOMER);
		User persistentUser=userDao.save(mapper.map(user, User.class));
		return mapper.map(persistentUser,SignUpResponse.class);
	}
	@Override
	public User updteUser(User user) {
		User foundUSer=userDao.findById(user.getId())
				.orElseThrow(()->new ResourceNotFoundException("invalid id "));
		
		return userDao.save(user);
	}
	@Override
	public AuthResponse singInUser(AuthRequest request) {
		User user=userDao.findByEmailAndPassword(request.getEmail(),request.getPassword())
				.orElseThrow(()->new ResourceNotFoundException("in valid email or password"));
		return mapper.map(user,AuthResponse.class);
	}
	@Override
	public User getUserDetails(Long userId) {
		return userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User Id Invalid : User not found !!!"));
	}
	
	
	

}
