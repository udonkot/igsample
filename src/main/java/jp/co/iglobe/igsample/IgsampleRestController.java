package jp.co.iglobe.igsample;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
import com.amazonaws.services.dynamodbv2.document.spec.GetItemSpec;

import jp.co.iglobe.igsample.bean.HokokuBean;

@RestController
public class IgsampleRestController {
	@RequestMapping(value="/top/hokoku/regist/blogic", consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String,String> regist(@RequestBody HokokuBean bean) {

		String userName = bean.getUserName() + "_100";
		String fromDate = bean.getFromDate() + "_200";
		String toDate = bean.getToDate() + "_300";
		String content = bean.getContent() + "_400";

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
	 *
	 * @return
	 */
	@RequestMapping(value="/top/hokoku/list/blogic", method=RequestMethod.GET)
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
        AmazonDynamoDB client =  AmazonDynamoDBClientBuilder.standard().withRegion(Regions.AP_NORTHEAST_1).build();
        DynamoDB dynamoDb = new DynamoDB(client);
        Table table = dynamoDb.getTable("hokoku");

        String userid = "user100";
        String username = "sampleUser100";

        final Map<String, Object> infoMap = new HashMap<String, Object>();
        infoMap.put("plot", "Nothing happens at all.");
        infoMap.put("rating", 0);


        GetItemSpec spec = new GetItemSpec().withPrimaryKey("hokokuid", "1", "username","hoge");
        Item item = table.getItem(spec);

        String userName = (String) item.get("username");
        String fromDate = (String) item.get("fromdate");
        String toDate = (String) item.get("todate");
        String content = (String) item.get("content");
        list.add(createHokokuData(userName, fromDate, toDate, content));



		return list;


	}

	/**
	 *
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
