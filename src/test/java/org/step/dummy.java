package org.step;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.swing.text.DateFormatter;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class dummy extends BaseClass {
	public static void main(String[] args) throws IOException {
		Map<String, String> map = new LinkedHashMap<String, String>();
		File f = new File(
				"C:\\Users\\rider\\eclipse-workspace\\CucumberAdactNew\\excel\\New Microsoft Excel Worksheet.xlsx");
		FileInputStream fin = new FileInputStream(f);
		Workbook w = new XSSFWorkbook(fin);
		Sheet s = w.getSheet("Sheet1");
		Row r = s.getRow(1);
		Cell c = r.getCell(4);
		
		for (int i = 0; i < s.getPhysicalNumberOfRows(); i++) {
			Row row = s.getRow(i);
			Cell cell = row.getCell(0);

			String testCaseNo = cell.getStringCellValue();
			String testCaseID = "TC_1";
			if (testCaseNo.equals(testCaseID)) {
				Row header = s.getRow(0);
				Row required = s.getRow(i);
				for (int j = 0; j < header.getPhysicalNumberOfCells(); j++) {
					Cell heading = header.getCell(j);
					Cell data = required.getCell(j);
					if (data.getCellType() == data.CELL_TYPE_NUMERIC) {
						
							double d = data.getNumericCellValue();
							long l = (long) d;
							String value = String.valueOf(l);
							String txtheading = heading.getStringCellValue();
							map.put(txtheading, value);
							System.out.println(txtheading);
							System.out.println(value);
						

					}

					else {
						String txtheading = heading.getStringCellValue();
						String txtdata = data.getStringCellValue();

						System.out.println(txtheading);
						System.out.println(txtdata);
						map.put(txtheading, txtdata);
					}
				}
			}
		}

	}

}