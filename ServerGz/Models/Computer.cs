namespace ServerGz.Models
{
    public class Computer
    {
        public int id {get;set;}
        public string name {get;set;}
        public double price {get;set;}
        public string info {get;set;}
        public bool status {get;set;}
        
        public int orderNum {get;set;}

        public Compon compon {get;set;}
    }
}