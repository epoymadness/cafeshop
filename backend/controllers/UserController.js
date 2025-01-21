const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const UserController = {

  getProduct: async (req, res) => {
    try {
      const result = await prisma.Product.findMany();
      res.status(200).json({ data: result });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: "Failed to fetch products." });
    }
  },


  postUser: async (req, res) => {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required." });
    }

    try {
      const result = await prisma.Customer.create({
        data: {
          name: name,
        }
      });

      res.status(201).json({
        message: "Product created successfully!",
        data: result,
      });
    } catch (error) {
      console.error('Error saving product:', error);
      res.status(500).json({ error: 'Failed to save product to the database.' });
    }
  },


  customerOrder: async (req, res) => {
    const { customerId, customerItem  } = req.body;

    try {
      const order = await prisma.Order.create({
        data: {
          customerId,
          orderItems: {
            create: customerItem.map(item => ({
              productId: item.productId,
              quantity: item.quantity,
            })),
          },
        },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      })
      res.status(201).json({
        message: "Thank you for purchasing!!",
        order: order,
      });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order.' });
    }
  }


  
};

module.exports = UserController;
