import Link from 'next/link';
import React from 'react';

function Settings() {
  const menuItems = [
    {
      href: "/settings/brand",
      imageSrc: "https://images.unsplash.com/photo-1687220296822-5ae701b3b360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      label: "Brand"
    },
    {
      href: "/settings/category",
      imageSrc: "https://images.unsplash.com/photo-1687270282079-58b4689fed0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      label: "Category"
    },
    {
      href: "/settings/department",
      imageSrc: "https://images.unsplash.com/photo-1687270282079-58b4689fed0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      label: "Department"
    },
    {
      href: "/settings/branch",
      imageSrc: "https://images.unsplash.com/photo-1687270282079-58b4689fed0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      label: "Branch"
    }
  ];

  return (
    <div>
      <h1 className='text-xl pb-3'>Choose a Menu</h1>
      <div className="flex gap-10 justify-between">
        {menuItems.map((menuItem, index) => (
          <Link href={menuItem.href} key={index} className='border-2 rounded-md w-[200px] h-[300px] relative bg-[url("https://images.unsplash.com/photo-1687220296822-5ae701b3b360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80")] bg-cover'>
            <span className='text-base lg:text-2xl font-bold text-purple-500 hover:text-yellow-500 absolute right-3 bottom-3'>{menuItem.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Settings;
