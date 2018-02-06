package jp.co.iglobe.igsample;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;

import jp.co.iglobe.igsample.bean.HokokuBean;

@RestController
public class IgsampleRestController {
	/**
	 * dynamoDBレコード登録
	 * @param bean
	 * @return
	 */
	@RequestMapping(value = "/top/hokoku/regist/blogic", consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String, String> regist(@RequestBody HokokuBean bean) {

		// リクエストデータ
		String userName = bean.getUserName();
		String fromDate = bean.getFromDate();
		String toDate = bean.getToDate();
		String content = bean.getContent();

		// DynamoDBクライアント生成
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().withRegion(Regions.AP_NORTHEAST_1).build();
		DynamoDB dynamoDb = new DynamoDB(client);

		// テーブル指定
		Table table = dynamoDb.getTable("hokoku");

		// primary値取得
		// とりあえず乱数でごまかす
		Random r = new Random();
		String hokokuId = Integer.toString(r.nextInt(99999));

		// 登録データ生成
		Item item = new Item().withPrimaryKey("hokokuid", hokokuId)
				.withString("username", userName)
				.withString("fromdate", fromDate)
				.withString("todate", toDate)
				.withString("content", content);

		// レコード登録
		table.putItem(item);

		// レスポンスJSONデータ生成
		Map<String, String> retMap = new ConcurrentHashMap<>();
		retMap.put("userName", userName);
		retMap.put("fromDate", fromDate);
		retMap.put("toDate", toDate);
		retMap.put("content", content);

		System.out.println("userName:" + bean.getUserName());
		System.out.println("fromDate:" + bean.getFromDate());
		System.out.println("toDate:" + bean.getToDate());
		System.out.println("content:" + bean.getContent());
		return retMap;
		//		return Collections.singletonMap("key", "value");
	}

	/**
	 * dynamoDBレコード取得
	 * @return
	 */
	@RequestMapping(value = "/top/hokoku/list/blogic", method = RequestMethod.GET)
	@ResponseBody
	public List<HokokuBean> getHokokuList() {

		System.out.println("start list");

		List<HokokuBean> list = new ArrayList<>();
		//		list.add(createHokokuData("user01", "20180101", "20180107", "hogemoge"));
		//		list.add(createHokokuData("user02", "20180201", "20180207", "piyopiyp"));
		//		list.add(createHokokuData("user03", "20180301", "20180307", "hugafuga"));
		//
		//		System.out.println(list.get(1).getUserName());
		//		System.out.println(list.get(1).getFromDate());
		//		System.out.println(list.get(1).getToDate());
		//		System.out.println(list.get(1).getContent());
		//

		// DynamoDBクライアント生成
		AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().withRegion(Regions.AP_NORTHEAST_1).build();

		// 単一レコード取得
		//		DynamoDB dynamoDb = new DynamoDB(client);
		//		Table table = dynamoDb.getTable("hokoku");
		//        GetItemSpec spec = new GetItemSpec().withPrimaryKey("hokokuid", "1", "username","hoge");
		//        Item item = table.getItem(spec);
		//
		//        String userName = (String) item.get("username");
		//        String fromDate = (String) item.get("fromdate");
		//        String toDate = (String) item.get("todate");
		//        String content = (String) item.get("content");
		//        list.add(createHokokuData(userName, fromDate, toDate, content));

		// 複数レコード取得
		ScanRequest scanRequest = new ScanRequest()
				.withTableName("hokoku");

		String userName = null;
		String fromDate = null;
		String toDate = null;
		String content = null;

		ScanResult result = client.scan(scanRequest);
		for (Map<String, AttributeValue> item : result.getItems()) {
			userName = item.get("username").getS();
			fromDate = item.get("fromdate").getS();
			toDate = item.get("todate").getS();
			content = item.get("content").getS();
			list.add(createHokokuData(userName, fromDate, toDate, content));
		}

		return list;

	}

	/**
	 * レスポンスJsonデータ生成
	 * @param userName
	 * @param fromDate
	 * @param toDate
	 * @param content
	 * @return
	 */
	private HokokuBean createHokokuData(String userName, String fromDate, String toDate, String content) {
		HokokuBean data = new HokokuBean();

		data.setUserName(userName);
		data.setFromDate(fromDate);
		data.setToDate(toDate);
		data.setContent(content);

		return data;

	}

}
