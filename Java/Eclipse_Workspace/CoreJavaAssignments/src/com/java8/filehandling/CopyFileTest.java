package com.java8.filehandling;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.attribute.BasicFileAttributeView;
import java.nio.file.attribute.BasicFileAttributes;


public class CopyFileTest {

	public static void main(String[] args) throws IOException {
		
		File file1 = new File("ReadFile.txt");
		File file2 = new File("WriteTo.txt");
		
		
		String name = file1.getName();
		long size = file1.getTotalSpace();
		boolean canRead = file1.canRead();
		boolean canWrite = file1.canWrite();
		boolean canExecute = file1.canExecute();
		boolean isDir = file1.isDirectory();
		boolean isFile = file1.isFile();
		
		
		System.out.println("File Name : "+name);
		System.out.println("Size : "+size);
		System.out.println("Can Read :"+canRead);
		System.out.println("Can Write :"+canWrite);
		System.out.println("Can Execute :"+canExecute);
		System.out.println("Is Directory :"+isDir);
		System.out.println("Is File :"+isFile);
}
}
