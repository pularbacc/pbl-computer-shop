using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerGz.Data;
using ServerGz.Models;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Xml;
using HtmlAgilityPack;

namespace ServerGz.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
	private readonly GzDbContext _context;

	public TestController(GzDbContext context)
	{
	    _context = context;
	}

	/*[HttpGet]
	  [Authorize]
	  public IActionResult Get()
	  {            
	  Console.WriteLine(User.Identity.Name);
	  TestModel testModel = new TestModel();
	  testModel.id = 4;
	  testModel.name = "nguyen";
	  int[] a = new int[] {1,2,3,4,5};
	  return Ok(testModel);
	  }*/

	[HttpGet]
	//[Authorize]
	    public IActionResult Get()
	    {
		var url = "https://duckduckgo.com/?q=pussy&t=ffab&iar=images&iax=images&ia=images";
		var web = new HtmlWeb();
		var doc = web.Load(url);

		string docToString = doc.DocumentNode.OuterHtml.ToString();

		Console.WriteLine(docToString);

		return Ok();
	    }

	[HttpPost]
	public IActionResult Post(TestModel test)
	{
	    Console.WriteLine("cc");
	    Console.WriteLine("access post");
	    Console.WriteLine(test.name);

	    return Ok();
	}
    }

    public class TestModel
    {
	public string name { get; set; }

    }
}
